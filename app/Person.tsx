import Link from "next/link";

export default function Person({ id, name }: { id:string, name: string }) {
  return (
    <Link href={`/person/${id}`}>
      <span>{name}</span>
    </Link>
  );
}
