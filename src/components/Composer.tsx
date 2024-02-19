import { FormEvent, FormHTMLAttributes, Ref, forwardRef, useImperativeHandle, useRef } from "react";
import { Dream } from "../model/Dream";

export interface ComposerData{
    title: string;
    contents: string;
}

export interface Props extends FormHTMLAttributes<HTMLFormElement> {
    dismiss?: () => void;
    send?: (composerData: ComposerData) => void;
    dream?: Dream;
    composerTitle?: string;
}

export interface ComposerRef {
    focus: () => void;
}

export const Composer = forwardRef<ComposerRef, Props>(({dismiss, className, send, dream, composerTitle: title, ...props}, ref) => {
    const dreamContentsTextarea: Ref<HTMLTextAreaElement> = useRef(null)
    const dreamTitleInput: Ref<HTMLInputElement> = useRef(null)

    useImperativeHandle(ref, () => ({
        focus: () => {
            dreamTitleInput.current?.focus();
        }
    }))

    const submitEvent = (e: FormEvent<HTMLFormElement>) => {
        send && send({
            title: dreamTitleInput.current?.value ?? '',
            contents: dreamContentsTextarea.current?.value ?? '',
        })
        e.nativeEvent.preventDefault();
    }

    return (
        <form className={`flex flex-col gap-2 transition-transform-opacity ${className}`} onSubmit={submitEvent} { ...props }>
            <h2 className='text-xl font-normal text-center text-primary-100 sm:truncate sm:text-2xl sm:tracking-tight'>{title}</h2>
            <label htmlFor="dreamTitle">Title:</label>
            <input defaultValue={dream?.title} ref={dreamTitleInput} type="text" id="dreamTitle" className="w-full p-3 bg-primary-800 outline-primary-700 rounded-md" />
            <label htmlFor="dreamContents">Dream:</label>
            <textarea defaultValue={dream?.contents} ref={dreamContentsTextarea} id='dreamContents' className='resize-none w-full p-3 bg-primary-800 outline-primary-700 h-96 max-h-[25vh] rounded-md'></textarea>
            <div className='flex justify-end gap-2'>
                <button type="button" onClick={dismiss} className="self-end rounded-md px-3 py-2 text-sm font-semibold text-neutral-100 shadow-sm control-outline outline-offset-0 focus-visible:outline-neutral-100 active:text-neutral-300 active:outline-neutral-300">Cancel</button>
                <button type="submit" className="rounded-md bg-secondary-800 px-3 py-2 text-sm font-semibold text-white shadow-sm active:bg-secondary-900 control-outline-secondary">Log dream</button>
            </div>
        </form>
    );
})

export default Composer;