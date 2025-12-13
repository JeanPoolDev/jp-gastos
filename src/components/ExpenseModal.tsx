import { Fragment } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { Dialog, Transition } from '@headlessui/react'
import { useBudget } from '../hooks/useBudget'
import { ExpenseForm } from './ExpenseForm';

export default function ExpenseModal() {

  const { state, dispatch } = useBudget();

  return (
    <>
      <div className="flex items-center justify-center ">
        <button
          className='w-12 h-12 border rounded-full cursor-pointer flex justify-center items-center'
          onClick={() => dispatch({ type: 'toogle-modal' })}
          type="button"
        >
          <PlusIcon className='w-8 h-8' />
        </button>
      </div>

      <Transition appear show={state.modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => dispatch({ type: 'toogle-modal' })}>
          <Transition.Child
            as={Fragment}
            // enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-[#ebf1e5] p-6 text-left align-middle shadow-xl transition-all">

                  <ExpenseForm />

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}