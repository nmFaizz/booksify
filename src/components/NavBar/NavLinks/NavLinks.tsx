import Link from "next/link"

const NavLinks = ({ 
    path, 
    linkName,
    isMenuHandler 
}: { 
    path: string, 
    linkName: string,
    isMenuHandler: any
}) => {
    return <Link href={path} onClick={isMenuHandler}>{linkName}</Link>
}

export default NavLinks