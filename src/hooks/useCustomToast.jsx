import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useCustomToast = () => {
    const router = useRouter();
    const defultVal_duration=2000;
    const defultVal_delay=500;
    /**
     * Shows a success toast message with optional redirection.
     * @param {Object} params - The toast parameters.
     * @param {string} params.msg - The message to display.
     * @param {string} [params.redirectURL] - The URL to redirect after the toast closes.
     * @param {number} [params.duration=defultVal_duration] - Duration for the toast display.
     * @param {number} [params.delay=defultVal_duration] - Delay before the toast starts displaying.
     */
    const successToast = ({ msg, redirectURL, duration = defultVal_duration, delay = defultVal_delay }) => {
        toast.success(msg, {
            duration,
            delay,
            onAutoClose: () => {
                if (redirectURL) {
                    router.push(redirectURL);
                }
            },
            onDismiss: () => {
                if (redirectURL) {
                    router.push(redirectURL);
                }
            },
        });
    };
    const errorToast = ({ msg, redirectURL, duration = defultVal_duration, delay = defultVal_delay  }) => {
        toast.error(msg, {
            duration,
            delay,
            onAutoClose: () => {
                if (redirectURL) {
                    router.push(redirectURL);
                }
            },
            onDismiss: () => {
                if (redirectURL) {
                    router.push(redirectURL);
                }
            },
        });
    };
    const infoToast = ({ msg, redirectURL, duration = defultVal_duration, delay = defultVal_delay  }) => {
        toast.info(msg, {
            duration,
            delay,
            onAutoClose: () => {
                if (redirectURL) {
                    router.push(redirectURL);
                }
            },
            onDismiss: () => {
                if (redirectURL) {
                    router.push(redirectURL);
                }
            },
        });
    };

    return { successToast, errorToast, infoToast };
};

