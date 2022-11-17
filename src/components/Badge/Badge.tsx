import { BadgeLabel, Color } from "../../types";

interface IProps {
  color: Color;
  badgeLabel: BadgeLabel;
  name: string;
}

export const Badge = ({ badgeLabel, color, name }: IProps) => {
  return (
    <h4>
      <span
        className={`badge bg-${color} d-flex align-items-center justify-content-center`}
      >
        {name}: {badgeLabel}
      </span>
    </h4>
  );
};
