import Mailto from "reactv16-mailto";
import { BsBellFill } from "react-icons/bs";

function Contact() {
    return (
        <section className="contact">
            <div className="contact__title">
                Get in touch!
                <span>
                    <BsBellFill />
                </span>
            </div>
            <div className="contact__desc">
                If you are interested in working with me just drop me a short
                mail at
                <span className="mailto">
                    <Mailto email="vux.0511@gmail.com" obfuscate={true}>
                        vux.0511@gmail.com
                    </Mailto>
                </span>
            </div>
        </section>
    );
}

export default Contact;
