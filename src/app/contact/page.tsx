import LinkUnderline from "@/components/LinkUnderline";
import WidenText from "@/components/WidenAnimator";
import {Example} from "@/components/contact/ClipPathLinks";

export default function Contact() {
    return (
        <div className="flex flex-col w-full h-full px-7 pt-16 sm:px-12 sm:pt-24 md:pt-36 md:px-24 justify-center items-center">
            <WidenText indexes={[0, 2]} text={"Contact"} cn={"text-4xl font-black uppercase"}/>
            {/* <LinkUnderline useLink={true} href={"mailto:kurtzjeremy126@gmail.com"}>
                Email: kurtzjeremy126@gmail.com
            </LinkUnderline>
            <LinkUnderline useLink={true} href={"https://www.linkedin.com/in/jeremymkurtz/"}>
                Linkedin: jeremymkurtz
            </LinkUnderline>
            <LinkUnderline useLink={true} href={"https://www.github.com/jeremymkurtz"}>
                Github: jeremymkurtz
            </LinkUnderline>
            <LinkUnderline useLink={true} href={"tel:+1(312)718-4905"}>
                Phone Number: +1(312)718-4905
            </LinkUnderline> */}
            <Example />
        </div>
    )
}