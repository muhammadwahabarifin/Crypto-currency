"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MainButton from "@/common/MainButton";

function HeroSection() {
    return (
        <section className="z-10 relative overflow-hidden bg-stars flex justify-center flex-col items-center bg-cover bg-no-repeat w-full h-screen">
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, y: 0 }}
                viewport={{ once: false }}
                className="z-2 font-bold text-[2rem] leading-tight md:text-[85px] text-center"
            >
                We make crypto <br /> clear and simple
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, y: 0 }}
                viewport={{ once: false }}
                className="text-subtitle font-semibold py-[32px] pt-4 text-center"
            >
                Buy, sell, and grow your crypto with CoinFlip, the platform dedicated to
                every trader at every level.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, y: 0 }}
                viewport={{ once: false }}
            >
                <MainButton
                    text="Get Started"
                    classes="primary-gradient border-gradient rounded-[10px] font-semibold w-[156px] h-[56px]" disabled={false} />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, x: 0 }}
                className="absolute -right-[21rem] bottom-0 -z-10"
            >
                <Image
                    src="/images/hero_shape_2.png"
                    alt="hero ball shape"
                    width={'100'}
                    height={'100'}
                />
            </motion.div>
        </section>
    );
}

export default HeroSection;
