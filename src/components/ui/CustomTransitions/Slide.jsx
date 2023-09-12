import { Transition } from "@headlessui/react";

const SlideTransition = (props) => {
    return <Transition appear show={props.open}
        className="w-full z-10 flex justify-end"
        enter="transform transition duration-[400ms]"
        enterFrom="translate-y-20 sm:translate-y-0 sm:translate-x-20 opacity-0"
        enterTo="opacity-100 translate-y-0 sm:translate-y-0 md:translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-10"
        leaveTo="translate-x-0"
    >{props.children}</Transition>
}

export default SlideTransition;

SlideTransition.defaultProps = {
    open: false
}