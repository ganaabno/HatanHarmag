import { useTranslation } from "react-i18next";

/**
 * Brand-voice ticker. The track is duplicated so the -100% keyframe loops
 * seamlessly; the copy is decorative, so the duplicate is hidden from AT.
 */
export function Marquee() {
  const { t } = useTranslation();
  const phrase = t("marquee.text");
  const run = Array.from({ length: 4 }, (_, index) => <span key={index}>{phrase}</span>);

  return (
    <div className="marquee">
      <div className="marquee__track">{run}</div>
      <div className="marquee__track" aria-hidden="true">{run}</div>
    </div>
  );
}
