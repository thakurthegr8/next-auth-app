import { Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

const ZoomTransition = (props) => {
    return (
        <Transition appear show={props.open}
            as={Fragment}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 translate-y-20 sm:translate-y-0 sm:scale-0"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="transform duration-[400ms] transition ease-in-out"
            leaveFrom="opacity-100 sm:scale-100"
            leaveTo="opacity-0 sm:scale-0"
        >{props.children}</Transition>
    )
}

export default ZoomTransition;