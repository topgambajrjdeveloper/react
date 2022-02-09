import Header from "./Header";

export default function Layout(prosp) {
  const { children } = prosp;
  return (
    <>
      <Header />
      <div class="container m-auto">{children}</div>
    </>
  );
}
