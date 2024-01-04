import Link from "next/link"

export default function NotFound() {
    return (
        <div className="w-full h-[100vh] flex items-center justify-center">
            <div className="text-center">
                <p className="text-[4rem]">404</p>
                <p>Not found</p>
                <Link href="/" className="bg-white text-black px-2 py-1">Return to homepage</Link>
            </div>
        </div>
    )
}