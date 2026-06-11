import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { STAT_ICONS } from "./robotics-assets";
import type { RoboticsMessages } from "@/messages/robotics";

type RoboticsStatsBarProps = {
  content: RoboticsMessages["stats"];
};

export function RoboticsStatsBar({ content }: RoboticsStatsBarProps) {
  return (
    <section className="border-y border-zinc-200 bg-white">
      <Container>
        <ul className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 sm:py-12 lg:grid-cols-4 lg:gap-0">
          {content.items.map((stat, index) => (
            <li
              key={stat.label}
              className="flex items-start gap-4 lg:px-6 lg:first:pl-0 lg:last:pr-0"
            >
              <Image
                src={STAT_ICONS[index]}
                alt=""
                width={40}
                height={40}
                className="shrink-0"
                aria-hidden
              />
              <div className="flex flex-col gap-1">
                <p className="font-display text-2xl sm:text-3xl leading-none tracking-tight text-zinc-900">
                  {stat.value}
                  {stat.suffix ? (
                    <span className="text-brand">{stat.suffix}</span>
                  ) : null}
                </p>
                <p className="text-sm leading-snug text-zinc-500">
                  {stat.label}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
