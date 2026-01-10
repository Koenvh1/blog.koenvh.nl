import { GetServerSideProps } from "next";

export default function About() {
  return <div>Whoops, that page does not seem to exist. <a href="/">Go back home</a>.</div>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { req, res, query } = ctx;

    const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST;
	if (!host) {
		throw new Error('Could not determine host');
	}

    if (req.method && req.method == "POST") {
        res.statusCode = 303;
        res.setHeader("Location", req.url ?? host);
        res.end();
    }
    return { props: {} };
};