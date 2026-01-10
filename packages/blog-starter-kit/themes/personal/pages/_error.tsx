import { GetServerSideProps } from "next";
import Link from "next/link";

export default function Error() {
  return <div>Whoops, that page does not seem to exist. <Link href="/">Go back home</Link>.</div>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { req, res, query } = ctx;

    if (req.method && req.method == "POST") {
        res.statusCode = 303;
        res.setHeader("Location", req.url ?? "/");
        res.end();
    }
    return { props: {} };
};