export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div>
      <h1>Cartem </h1>
      <section>{children}</section>
    </div>
  }