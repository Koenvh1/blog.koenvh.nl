import { GetStaticProps } from "next";
import Link from "next/link";

export default function Error() {
    return <div className="p-5">
        Whoops, that page does not seem to exist.<br />
        <a className="font-bold" href={"/"}>Go back home</a>.
    </div>
}

export const getStaticProps: GetStaticProps = async () => {
    return { 
        props: {},
        revalidate: 300
    };
};