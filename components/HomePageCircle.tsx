"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import mapPinIcon from "@/public/icons/map-pin.svg";

/* middle icons */
import targetIcon from "@/public/icons/target.svg";
import cameraIcon from "@/public/icons/video-camera.svg";
import paletteIcon from "@/public/icons/color-palette.svg";
import headphoneIcon from "@/public/icons/headphone.svg";
import microphone from "@/public/icons/mic.svg";

/* outer icons */
import bentoIcon from "@/public/icons/bento.svg";
import smileIcon from "@/public/icons/smile.svg";
import atIcon from "@/public/icons/at.svg";
import footballIcon from "@/public/icons/football.svg";
import sakuraIcon from "@/public/icons/sakura.svg";

const GradientCircle: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div className={cn("gradient-circle", className)} {...rest}>
      {children}
    </div>
  );
};

const InnerCircle = () => {
  return (
    <GradientCircle className="w-[105px] h-[105px]">
      <Image src={mapPinIcon} alt="map pin icon" width={60} height={60} />
    </GradientCircle>
  );
};

const MiddleCircle = ({ children }: { children: React.ReactNode }) => {
  const icons = [
    <Image src={targetIcon} alt="target icon" key="target-icon" />,
    <Image src={cameraIcon} alt="camera icon" key="camera-icon" />,
    <Image src={paletteIcon} alt="palette icon" key="palette-icon" />,
    <Image src={headphoneIcon} alt="headphone icon" key="headphone-icon" />,
    <Image src={microphone} alt="microphone icon" key="microphone-icon" />,
  ];
  return (
    <GradientCircle id="middle-circle" className="">
      {children}
      {icons}
    </GradientCircle>
  );
};

const OuterCircle: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children, className } = props;
  const icons = [
    <Image src={bentoIcon} alt="bento icon" key="bento-icon" />,
    <Image src={smileIcon} alt="smile icon" key="smile-icon" />,
    <Image src={atIcon} alt="at icon" key="at-icon" />,
    <Image src={footballIcon} alt="football icon" key="football-icon" />,
    <Image src={sakuraIcon} alt="sakura icon" key="sakura-icon" />,
  ];
  return (
    <GradientCircle id="outer-circle" className={className}>
      {children}
      {icons}
    </GradientCircle>
  );
};
export function HomePageCircle({ className }: { className?: string }) {
  return (
    <OuterCircle className={className}>
      <MiddleCircle>
        <InnerCircle />
      </MiddleCircle>
    </OuterCircle>
  );
}
