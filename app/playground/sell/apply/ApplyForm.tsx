'use client'

import { type ISigningAgreementResponse } from '@/app/api/signing-agreements/route'
import { PrimaryButton, SecondaryButton } from '@/components/button'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { useEffect, useState } from 'react'
import { Checkbox, Input } from '@/components/form'
import { SectionTitle } from '@/components/semantic'
import { type ConfirmationResult, RecaptchaVerifier } from 'firebase/auth'
import useFirebase from '@/hooks/useFirebase'
import useSnackBar from '@/hooks/useSnackBar'

declare const window: Window & typeof globalThis & {
  confirmationResult: undefined | ConfirmationResult
  recaptchaVerifier: undefined | RecaptchaVerifier
}

export interface IApplyForm {
    signing_agreements: Array<{
        type: string
        agree: boolean
    }>

    email: string
    password: string
    password_confirmation: string
    phone: string
    sms_code: string

    name: string
    eng_name: string
    cs_tel: string
    web_url: string
    kakao_channel_id?: string
    instagram_id?: string
}

export default function ApplyForm() {
  const { auth, signInWithPhoneNumber } = useFirebase()
  const [isSmsSent, setIsSmsSent] = useState(false)
  const [isSmsChecked, setIsSmsChecked] = useState(false)

  const { data: signingAgreementsData, isLoading } = useQuery<ISigningAgreementResponse>('/api/signing-agreements')

  const { toast } = useSnackBar()

  const {
    control,
    setValue,
    getValues,
    formState: { isSubmitting },
    handleSubmit: onSubmit
  } = useForm<IApplyForm>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      password_confirmation: '',
      name: '',
      eng_name: '',
      cs_tel: '',
      web_url: '',
      kakao_channel_id: '',
      instagram_id: '',
      phone: '',
      sms_code: '',
      signing_agreements: []
    }
  })

  useEffect(() => {
    if (signingAgreementsData == null) {
      return
    }

    setValue('signing_agreements', signingAgreementsData.signing_agreements.map(signingAgreement => ({
      type: signingAgreement.type,
      agree: false,
    })))
  }, [signingAgreementsData])

  const handleSubmit = async (data: IApplyForm) => {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(data, null, 2))
        resolve()
      }, 1000)
    })
  }

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
    }, auth)
  }, [])

  const sendSmsAuth = async () => {
    const phone = getValues('phone')
    if (phone === '' || window.recaptchaVerifier == null) {
      return
    }

    auth.useDeviceLanguage()
    signInWithPhoneNumber(auth, `+82${phone}`, window.recaptchaVerifier)
      .then(result => {
        window.confirmationResult = result
        setIsSmsSent(true)
        toast.success('입력하신 전화번호로 인증번호가 발송되었어요!')
      })
      .catch(err => { console.error(err) })
  }

  const checkSmsAuth = async () => {
    const smsCode = getValues('sms_code')
    if (smsCode === '') {
      return
    }

    if (window.confirmationResult == null) {
      return
    }

    window.confirmationResult.confirm(smsCode)
      .then(() => {
        setIsSmsChecked(true)
        toast.success('인증번호 확인이 완료되었어요')
      })
      .catch(err => {
        console.error(err)
        if (err instanceof Error) {
          toast.error(err.message)
        } else {
          toast.error(JSON.stringify(err))
        }
      })
  }

  return (
    <>
      <form
        onSubmit={onSubmit(handleSubmit)}
        className='px-12pxr'
      >
        <section className='pb-16pxr'>
          <SectionTitle>약관 동의</SectionTitle>
          {isLoading && <div>loading...</div>}
          {signingAgreementsData?.signing_agreements.map((signingAgreement, index) => (
            <div
              key={signingAgreement.type}
              className='pb-16pxr last:pb-0pxr'
            >
              <div className='text-lg pb-4pxr'>{index + 1}. {signingAgreement.title}</div>
              <ScrollText
                className='max-h-[30vh] p-10pxr border'
                contents={signingAgreement.contents}
              ></ScrollText>
              <Checkbox
                className='py-8pxr'
                name={`signing_agreements.${index}.agree`}
                control={control}
                required={signingAgreement.required}
                label={<div>{signingAgreement.title}에 동의합니다</div>}
              ></Checkbox>
            </div>
          ))}
        </section>

        <section className='pb-16pxr'>
          <SectionTitle>판매자 입점정책</SectionTitle>
          <div className='p-12pxr bg-primary text-white'>
            <ol>
              <li className='list-disc list-inside pb-12pxr'>
                <strong>지식재산권 정책</strong>
                <p className='pl-20pxr'>상표권 침해 상품, 초상권 침해 상품, 국내 도매처 이미지, 해외 도매 거래처 이미지의 사용을 제한하며 입점 취소 사유가 될 수 있습니다.</p>
              </li>
              <li className='list-disc list-inside pb-12pxr'>
                <strong>전 상품 무료배송 정책</strong>
                <p className='pl-20pxr'>㈜쇼핑몰은 현재 전 상품 무료배송 정책을 시행하고 있습니다. ㈜쇼핑몰에서의 판매 상품은 100% 무료배송으로 진행해 주셔야 합니다.<br />(배송비 업체 부담) 단, 도서산간 지역은 추가 배송비를 별도 수취하실 수 있습니다.</p>
              </li>
              <li className='list-disc list-inside pb-12pxr'>
                <strong>정산 정책</strong>
                <p className='pl-20pxr'>㈜쇼핑몰은 월 2회 정산되며, 판매 수수료와는 별도로 서버 이용료 (월 49,500원(VAT포함)/월 2회 분납)가 부과됩니다.</p>
              </li>
              <li className='list-disc list-inside pb-12pxr'>
                <strong>환불보장제</strong>
                <p className='pl-20pxr'>배송완료 후 7일 이내 상품은 100% 교환&amp;환불을 보장해주셔야 합니다.</p>
              </li>
              <li className='list-disc list-inside pb-12pxr'>
                <strong>판매 지원금 정책</strong>
                <p className='pl-20pxr'>㈜쇼핑몰은 결제 간 쿠폰 사용 금액의 일정 부분을 지원하는 판매자 지원금 정책을 시행하고 있습니다.</p>
                <p className='pl-20pxr'>
                    20% 이하의 쿠폰 사용 시 쿠폰 할인 금액의 50% 셀러 부담, 50% 쇼핑몰에서 지원하며<br/>
                    20% 초과의 쿠폰 사용 시 셀러는 최대 10% 부담하며 초과 쿠폰 금액은 쇼핑몰에서 지원합니다.<br/>
                    (예시 : 30% 쿠폰 사용 시 10% 셀러 부담 20% 브랜디 부담)
                </p>
                <p className='pl-20pxr'>별도의 협의를 통해 해당 내용은 변경될 수 있습니다.</p>
              </li>
              <li className='list-disc list-inside pb-12pxr'>
                <strong>신상 5% 할인</strong>
                <p className='pl-20pxr'>신규 등록 상품에 대한 5%신상 할인이 24시간 동안 자동 적용되며, 할인율은 판매자가 부담합니다.</p>
              </li>
              <li className='list-disc list-inside pb-12pxr'>
                <strong>기타</strong>
                <p className='pl-20pxr'>위의 대표 입점 정책 외에 기타 운영정책은 약관 등의 내용을 따릅니다.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className='pb-16pxr'>
          <SectionTitle>판매자 정보</SectionTitle>
          <Input<IApplyForm>
            name='email'
            control={control}
            className='w-full'
            type='email'
            label='로그인용 이메일'
            required
            placeholder="myshop@example.com"
            rules={{
              required: '로그인용 이메일을 입력해주세요'
            }}
          ></Input>
          <Input<IApplyForm>
            name='password'
            control={control}
            className='w-full'
            type='password'
            label='비밀번호'
            required
            placeholder="************"
            rules={{
              required: '비밀번호를 입력해주세요'
            }}
          ></Input>
          <Input<IApplyForm>
            name='password_confirmation'
            control={control}
            className='w-full'
            type='password'
            label='비밀번호 확인'
            required
            placeholder="************"
            rules={{
              required: '비밀번호 확인을 입력해주세요'
            }}
          ></Input>

          <div className='flex items-center'>
            <Input<IApplyForm>
              name='phone'
              control={control}
              className='w-full flex-1'
              type='text'
              label='연락처(휴대폰 번호)'
              required
              placeholder="01012345678"
              rules={{
                required: '연락처를 입력해주세요'
              }}
            ></Input>
            <SecondaryButton
              type='button'
              size='normal'
              onClick={sendSmsAuth}
              disabled={isSmsSent}
            >인증요청</SecondaryButton>
            <div id='recaptcha-container'></div>
          </div>
          {isSmsSent && (
            <>
              <div className='flex items-center'>
                <Input
                  name='sms_code'
                  control={control}
                  className='w-full flex-1'
                  type='text'
                  label='인증번호'
                  required
                  placeholder='숫자 6자리'
                ></Input>
                <SecondaryButton
                  type='button'
                  size='normal'
                  onClick={checkSmsAuth}
                  disabled={isSmsChecked}
                >{ isSmsChecked ? '인증완료' : '인증번호 확인' }</SecondaryButton>
              </div>
            </>
          )}

        </section>

        <section className='pb-16pxr'>
          <SectionTitle>입점업체 정보</SectionTitle>

          <Input<IApplyForm>
            name='name'
            control={control}
            className='w-full'
            type='text'
            label='업체명(국문)'
            required
            placeholder="오 마이 티셔츠"
            rules={{
              required: '업체명을 입력해주세요'
            }}
          ></Input>
          <Input<IApplyForm>
            name='eng_name'
            control={control}
            className='w-full'
            type='text'
            label='업체명(영문)'
            required
            placeholder="Oh my T-shirt"
            rules={{
              required: '업체명을 입력해주세요'
            }}
          ></Input>
          <Input<IApplyForm>
            name='cs_tel'
            control={control}
            className='w-full'
            type='text'
            label='고객상담 연락처'
            required
            placeholder="021234567"
            rules={{
              required: '고객상담 연락처를 입력해주세요'
            }}
          ></Input>
          <Input<IApplyForm>
            name='web_url'
            control={control}
            className='w-full'
            type='text'
            label='업체 사이트 URL'
            required
            placeholder="홈페이지, 블로그 등"
            rules={{
              required: '업체 사이트 URL을 입력해주세요'
            }}
          ></Input>

          <Input<IApplyForm>
            name='kakao_channel_id'
            control={control}
            className='w-full'
            type='text'
            label='카카오 채널 ID(선택)'
            placeholder="kakaofriend"
          ></Input>

          <Input<IApplyForm>
            name='instagram_id'
            control={control}
            className='w-full'
            type='text'
            label='인스타그램 ID(선택)'
            placeholder="oh.my.t-shirt"
          ></Input>
        </section>

        <PrimaryButton type='submit' size='normal' pending={isSubmitting}>신청완료</PrimaryButton>
        <SecondaryButton type='button' size='normal'>임시저장</SecondaryButton>
      </form>
    </>
  )
}

function ScrollText({
  contents,
  className
}: { contents: string } & React.ComponentProps<'div'>) {
  return (
    <div className={`${className ?? ''} overflow-y-auto`} dangerouslySetInnerHTML={{ __html: contents }}></div>
  )
}
