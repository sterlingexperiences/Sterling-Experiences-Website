import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

type Props = {
  title: string;
};

export default function Calender({ title }: Props) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#800080" },
          dark: { "cal-brand": "#800080" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <button
      data-cal-namespace="30min"
      data-cal-link="sterling-experiences/30min"
      data-cal-config='{"layout":"month_view"}'
    >
      {title}
    </button>
  );
}
