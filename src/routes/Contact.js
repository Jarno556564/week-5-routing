// Contact.js
import '../App.scss';
import MyNavbar from '../components/MyNavbar.js';
import Logo from '../assets/logo-nav.png';
import Input from '../components/Input.js';
import Textarea from '../components/Textarea.js';
import Button from '../components/Button.js'
import Footer from '../components/Footer.js'

export default function Contact() {
    return (
        <div className="container-fluid">
            <div className="container">
                <MyNavbar
                    logo={Logo}
                    logo_name="QuantumSky Solutions"
                    items={[
                        { text: 'Home', href: "/" },
                        { text: 'Solutions', href: "/contact", disabled: true },
                        { text: 'About us', href: "/about", disabled: true },
                        { text: 'Pricing', href: "/pricing", disabled: true },
                        { text: 'Contact', href: "/contact" },
                    ]}
                />
            </div>

            <div className="container w-25">
                <Input
                    input_name='name'
                    label_text='Your name'
                    input_type='text'
                    input_placeholder='Enter your name'
                    input_styling='my-3'
                />
                <Input
                    input_name='email'
                    label_text='Your email'
                    input_type='email'
                    input_placeholder='Enter your email'
                    input_styling='my-3'
                />

                <Textarea
                    textarea_name='message'
                    label_text='Leave a message'
                    textarea_placeholder='Message goes here'
                    textarea_styling='my-3'
                />

                <Button text="Submit" />

            </div>

            <div className="container-fluid position-absolute bottom-0">
                <Footer
                    logo={Logo}
                    logo_name="QuantumSky Solutions"
                    list_name='Navigation'
                    items={[
                        { text: 'Home', href: "/" },
                        { text: 'Solutions', href: "/contact", disabled: true },
                        { text: 'About us', href: "/about", disabled: true },
                        { text: 'Pricing', href: "/pricing", disabled: true },
                        { text: 'Contact', href: "/contact" },
                    ]}
                    textbox_title='About us'
                    textbox_content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
                />
            </div>

        </div>
    );
}
