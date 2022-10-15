import { Switch } from '@headlessui/react'
import { TextAlignLeftIcon, TextAlignCenterIcon, TextAlignRightIcon, SunIcon, MoonIcon, DesktopIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from "react";
import { useDarkMode } from "lib/hooks";

export default function ThemeSelct() {
    const [isDark, setIsDark] = useDarkMode()
    const [enabled, setEnabled] = useState(isDark)

    useEffect(() => {
        setEnabled(isDark)
    }, [isDark])

    return (
        <Switch
      checked={enabled}
      onChange={setIsDark}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-white dark:focus:ring-white dark:focus:ring-offset-black`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
    )
}
