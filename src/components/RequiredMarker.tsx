import styles from "@/styles/required_marker.module.scss";

interface RequiredMarkerProps {
  className?: string;
}

function RequiredMarker({ className = "" }: RequiredMarkerProps) {
  return (
    <span className={styles.marker + (className ? +" " + className : "")}>
      *
    </span>
  );
}

export default RequiredMarker;
