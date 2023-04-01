export default function Layout({
  children
}: {
    children: React.ReactNode
}) {
  return (
    <>
      <div>이거 대시보드</div>
      <div>{children}</div>
    </>
  )
}
