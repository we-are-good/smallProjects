import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-10 m-10">
      <article className="font-bold">
        항목을 클릭하면 적용된 페이지가 보입니다.
      </article>
      <article className="flex flex-row gap-x-10">
        <Link href={"/api/schoolAPI"}>학교 API 적용</Link>
        <Link href={"/api/mapAPI"}>지도 API 적용</Link>
      </article>
      <article className="flex flex-row gap-x-10">
        <Link href={"/pages/pagenation"}>Pagenation</Link>
        <Link href={"/pages/infinityScroll"}>Infinity Scroll</Link>
      </article>
    </main>
  );
}
