import { ToastContainer, toast } from "react-toastify";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import mainStyles from "./index.module.scss";
import PlayCircle from "./play-circle.svg?react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ModalParent } from "../../components/ModalParent";
import { SignInForm } from "../../components/SignInForm";
import { SignUpForm } from "../../components/SignUpForm";
import { postFetch } from "../../lib";

const { root, content, subTitle, title, description, actions, howItWork, howItWorkText } = mainStyles;

export function Index() {
    const [openSignIn, setOpenSignIn] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const { pathname } = location;
        setOpenSignIn(pathname.includes('/sign-in'));
        setOpenSignUp(pathname.includes('/sign-up'));
    }, [location]);

    const handleSignInSubmit = (data:any) => {
        postFetch('http://hz.axgrid.com:8094/api/v1/signin', data).then(data =>{            
            if (data.err) {
                toast.error(data.err);
            } else {

            }
        });
        navigate('/');
    }

    const handleSignUpSubmit = (data:any) => {
        postFetch('http://hz.axgrid.com:8094/api/v1/signup', data).then(data =>{            
            if (data.err) {
                toast.error(data.err);
            } else {

            }
        });
        navigate('/');
    }


    return (
        <div className={root}>
            {openSignIn && createPortal(<ModalParent setOpen={setOpenSignIn}><SignInForm onSubmit={handleSignInSubmit}/></ModalParent>, document.body)}
            {openSignUp && createPortal(<ModalParent setOpen={setOpenSignUp}><SignUpForm onSubmit={handleSignUpSubmit}/></ModalParent>, document.body)}
            <Header />
            <main className={content}>
                <div>
                    <p className={subTitle}>NFT проект</p>
                    <h1 className={title}>
                        Будущее инвестиций в&nbsp;недвижимость
                    </h1>
                    <p className={description}>Мы делаем инвестиции в недвижимость в&nbsp;Европе безопасными, прозрачными и доступными для всех.</p>
                </div>
                <div className={actions}>
                    <Button text="Купить недвижимость" />
                    <button className={howItWork}>
                        <PlayCircle />
                        <span className={howItWorkText}>Как это работает?</span>
                    </button>
                </div>
            </main>
            <ToastContainer />
        </div>)
}
