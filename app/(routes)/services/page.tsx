import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">


                    <div className="flex justify-center">
                        <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                    </div>
                    <div className="flex justify-center text-center">
                        <p className="mb-3 text-xl text-gray-300">Soy desarrollador backend, ofrezco asesorias en proyectos universitarios.</p>
                    </div>
                    <div className="flex justify-center">
                        <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
                    </div>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;