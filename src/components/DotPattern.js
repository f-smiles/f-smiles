import React, {useEffect} from "react";

export default function DotPattern() {
  useEffect(() => {
    const rects = document.querySelectorAll("#dots rect");
    rects.forEach((rect, index) => {
      // rect.style.animationDelay = `${index * 0.1}s`;
      rect.style.animationDelay = `${index * 0.01}s`;
    });
  }, []);

  return (
    <div id="dots-container">
      <svg id="dots" width="286" height="631" viewBox="0 0 286 631" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="6.00167" height="6.00467" rx="3.00083" fill="#1E40AF"/>
  <rect x="31.002" width="6.00167" height="6.00467" rx="3.00083" fill="#1E40AF"/>
  <rect x="62.0039" width="6.00167" height="6.00467" rx="3.00083" fill="#1E40AF"/>
  <rect x="93.0059" width="6.00167" height="6.00467" rx="3.00083" fill="#1E40AF"/>
  <rect x="124.006" width="6.00167" height="6.00467" rx="3.00083" fill="#1E40AF"/>
  <rect x="155.008" width="6.00167" height="6.00467" rx="3.00083" fill="#1E40AF"/>
  <rect x="186.01" width="6.00167" height="6.00467" rx="3.00083" fill="#1E40AF"/>
  <rect x="217.012" width="6.00167" height="6.00467" rx="3.00083" fill="#1E40AF"/>
  <rect x="248.014" width="6.00167" height="6.00467" rx="3.00083" fill="#1E40AF"/>
  <rect x="279.016" width="6.00167" height="6.00467" rx="3.00083" fill="#1E40AF"/>
  <rect y="24.0146" width="6.00167" height="6.00467" rx="3.00083" fill="#1E40AF"/>
  <rect x="31.002" y="24.0146" width="6.00167" height="6.00467" rx="3.00083" fill="#1E40AF"/>
  <rect x="62.0039" y="24.0146" width="6.00167" height="6.00467" rx="3.00083" fill="#1E40AF"/>
  <rect x="93.0059" y="24.0146" width="6.00167" height="6.00467" rx="3.00083" fill="#1E40AF"/>
  <rect x="124.006" y="24.0146" width="6.00167" height="6.00467" rx="3.00083" fill="#1E40AF"/>
  <rect x="155.008" y="24.0146" width="6.00167" height="6.00467" rx="3.00083" fill="#1E40AF"/>
  <rect x="186.01" y="24.0146" width="6.00167" height="6.00467" rx="3.00083" fill="#1E40AF"/>
  <rect x="217.012" y="24.0146" width="6.00167" height="6.00467" rx="3.00083" fill="#1E40AF"/>
  <rect x="248.014" y="24.0146" width="6.00167" height="6.00467" rx="3.00083" fill="#1E40AF"/>
  <rect x="279.016" y="24.0146" width="6.00167" height="6.00467" rx="3.00083" fill="#1E40AF"/>
  <rect y="48.0293" width="6.00167" height="6.00467" rx="3.00083" fill="#244cd0"/>
  <rect x="31.002" y="48.0293" width="6.00167" height="6.00467" rx="3.00083" fill="#244cd0"/>
  <rect x="62.0039" y="48.0293" width="6.00167" height="6.00467" rx="3.00083" fill="#244cd0"/>
  <rect x="93.0059" y="48.0293" width="6.00167" height="6.00467" rx="3.00083" fill="#244cd0"/>
  <rect x="124.006" y="48.0293" width="6.00167" height="6.00467" rx="3.00083" fill="#244cd0"/>
  <rect x="155.008" y="48.0293" width="6.00167" height="6.00467" rx="3.00083" fill="#244cd0"/>
  <rect x="186.01" y="48.0293" width="6.00167" height="6.00467" rx="3.00083" fill="#244cd0"/>
  <rect x="217.012" y="48.0293" width="6.00167" height="6.00467" rx="3.00083" fill="#244cd0"/>
  <rect x="248.014" y="48.0293" width="6.00167" height="6.00467" rx="3.00083" fill="#244cd0"/>
  <rect x="279.016" y="48.0293" width="6.00167" height="6.00467" rx="3.00083" fill="#244cd0"/>
  <rect y="72.0439" width="6.00167" height="6.00467" rx="3.00083" fill="#2d56db"/>
  <rect x="31.002" y="72.0439" width="6.00167" height="6.00467" rx="3.00083" fill="#2d56db"/>
  <rect x="62.0039" y="72.0439" width="6.00167" height="6.00467" rx="3.00083" fill="#2d56db"/>
  <rect x="93.0059" y="72.0439" width="6.00167" height="6.00467" rx="3.00083" fill="#2d56db"/>
  <rect x="124.006" y="72.0439" width="6.00167" height="6.00467" rx="3.00083" fill="#2d56db"/>
  <rect x="155.008" y="72.0439" width="6.00167" height="6.00467" rx="3.00083" fill="#2d56db"/>
  <rect x="186.01" y="72.0439" width="6.00167" height="6.00467" rx="3.00083" fill="#2d56db"/>
  <rect x="217.012" y="72.0439" width="6.00167" height="6.00467" rx="3.00083" fill="#2d56db"/>
  <rect x="248.014" y="72.0439" width="6.00167" height="6.00467" rx="3.00083" fill="#2d56db"/>
  <rect x="279.016" y="72.0439" width="6.00167" height="6.00467" rx="3.00083" fill="#2d56db"/>
  <rect y="96.0586" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="31.002" y="96.0586" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="62.0039" y="96.0586" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="93.0059" y="96.0586" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="124.006" y="96.0586" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="155.008" y="96.0586" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="186.01" y="96.0586" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="217.012" y="96.0586" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="248.014" y="96.0586" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="279.016" y="96.0586" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect y="120.073" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="31.002" y="120.073" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="62.0039" y="120.073" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="93.0059" y="120.073" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="124.006" y="120.073" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="155.008" y="120.073" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="186.01" y="120.073" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="217.012" y="120.073" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="248.014" y="120.073" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="279.016" y="120.073" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect y="144.088" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="31.002" y="144.088" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="62.0039" y="144.088" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="93.0059" y="144.088" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="124.006" y="144.088" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="155.008" y="144.088" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="186.01" y="144.088" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="217.012" y="144.088" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="248.014" y="144.088" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="279.016" y="144.088" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect y="168.103" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="31.002" y="168.103" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="62.0039" y="168.103" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="93.0059" y="168.103" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="124.006" y="168.103" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="155.008" y="168.103" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="186.01" y="168.103" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="217.012" y="168.103" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="248.014" y="168.103" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect x="279.016" y="168.103" width="6.00167" height="6.00467" rx="3.00083" fill="#3e63de"/>
  <rect y="192.117" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="31.002" y="192.117" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="62.0039" y="192.117" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="93.0059" y="192.117" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="124.006" y="192.117" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="155.008" y="192.117" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="186.01" y="192.117" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="217.012" y="192.117" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="248.014" y="192.117" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="279.016" y="192.117" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect y="216" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="31.002" y="216" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="62.0039" y="216" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="93.0059" y="216" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="124.006" y="216" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="155.008" y="216" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="186.01" y="216" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="217.012" y="216" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="248.014" y="216" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="279.016" y="216" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect y="240.015" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="31.002" y="240.015" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="62.0039" y="240.015" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="93.0059" y="240.015" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="124.006" y="240.015" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="155.008" y="240.015" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="186.01" y="240.015" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="217.012" y="240.015" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="248.014" y="240.015" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="279.016" y="240.015" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect y="264.029" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="31.002" y="264.029" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="62.0039" y="264.029" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="93.0059" y="264.029" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="124.006" y="264.029" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="155.008" y="264.029" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="186.01" y="264.029" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="217.012" y="264.029" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="248.014" y="264.029" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect x="279.016" y="264.029" width="6.00167" height="6.00467" rx="3.00083" fill="#5f7ee4"/>
  <rect y="288.044" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="31.002" y="288.044" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="62.0039" y="288.044" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="93.0059" y="288.044" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="124.006" y="288.044" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="155.008" y="288.044" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="186.01" y="288.044" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="217.012" y="288.044" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="248.014" y="288.044" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="279.016" y="288.044" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect y="312.059" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="31.002" y="312.059" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="62.0039" y="312.059" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="93.0059" y="312.059" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="124.006" y="312.059" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="155.008" y="312.059" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="186.01" y="312.059" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="217.012" y="312.059" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="248.014" y="312.059" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="279.016" y="312.059" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect y="336.073" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="31.002" y="336.073" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="62.0039" y="336.073" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="93.0059" y="336.073" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="124.006" y="336.073" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="155.008" y="336.073" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="186.01" y="336.073" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="217.012" y="336.073" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="248.014" y="336.073" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="279.016" y="336.073" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect y="360.088" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="31.002" y="360.088" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="62.0039" y="360.088" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="93.0059" y="360.088" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="124.006" y="360.088" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="155.008" y="360.088" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="186.01" y="360.088" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="217.012" y="360.088" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="248.014" y="360.088" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect x="279.016" y="360.088" width="6.00167" height="6.00467" rx="3.00083" fill="#8199e9"/>
  <rect y="384.103" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="31.002" y="384.103" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="62.0039" y="384.103" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="93.0059" y="384.103" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="124.006" y="384.103" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="155.008" y="384.103" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="186.01" y="384.103" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="217.012" y="384.103" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="248.014" y="384.103" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="279.016" y="384.103" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect y="408.117" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="31.002" y="408.117" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="62.0039" y="408.117" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="93.0059" y="408.117" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="124.006" y="408.117" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="155.008" y="408.117" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="186.01" y="408.117" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="217.012" y="408.117" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="248.014" y="408.117" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="279.016" y="408.117" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect y="432" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="31.002" y="432" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="62.0039" y="432" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="93.0059" y="432" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="124.006" y="432" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="155.008" y="432" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="186.01" y="432" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="217.012" y="432" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="248.014" y="432" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="279.016" y="432" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect y="456.015" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="31.002" y="456.015" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="62.0039" y="456.015" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="93.0059" y="456.015" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="124.006" y="456.015" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="155.008" y="456.015" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="186.01" y="456.015" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="217.012" y="456.015" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="248.014" y="456.015" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="279.016" y="456.015" width="6.00167" height="6.00467" rx="3.00083" fill="#a2b4ef"/>
  <rect x="155.008" y="480.029" width="6.00167" height="6.00467" rx="3.00083" fill="#c4cff5"/>
  <rect x="186.01" y="480.029" width="6.00167" height="6.00467" rx="3.00083" fill="#c4cff5"/>
  <rect x="217.012" y="480.029" width="6.00167" height="6.00467" rx="3.00083" fill="#c4cff5"/>
  <rect x="248.014" y="480.029" width="6.00167" height="6.00467" rx="3.00083" fill="#c4cff5"/>
  <rect x="279.016" y="480.029" width="6.00167" height="6.00467" rx="3.00083" fill="#c4cff5"/>
  <rect x="155.008" y="504.044" width="6.00167" height="6.00467" rx="3.00083" fill="#c4cff5"/>
  <rect x="186.01" y="504.044" width="6.00167" height="6.00467" rx="3.00083" fill="#c4cff5"/>
  <rect x="217.012" y="504.044" width="6.00167" height="6.00467" rx="3.00083" fill="#c4cff5"/>
  <rect x="248.014" y="504.044" width="6.00167" height="6.00467" rx="3.00083" fill="#c4cff5"/>
  <rect x="279.016" y="504.044" width="6.00167" height="6.00467" rx="3.00083" fill="#c4cff5"/>
  <rect x="155.008" y="528.059" width="6.00167" height="6.00467" rx="3.00083" fill="#c4cff5"/>
  <rect x="186.01" y="528.059" width="6.00167" height="6.00467" rx="3.00083" fill="#c4cff5"/>
  <rect x="217.012" y="528.059" width="6.00167" height="6.00467" rx="3.00083" fill="#c4cff5"/>
  <rect x="248.014" y="528.059" width="6.00167" height="6.00467" rx="3.00083" fill="#c4cff5"/>
  <rect x="279.016" y="528.059" width="6.00167" height="6.00467" rx="3.00083" fill="#c4cff5"/>
  <rect x="155.008" y="552.073" width="6.00167" height="6.00467" rx="3.00083" fill="#d4ddf8"/>
  <rect x="186.01" y="552.073" width="6.00167" height="6.00467" rx="3.00083" fill="#d4ddf8"/>
  <rect x="217.012" y="552.073" width="6.00167" height="6.00467" rx="3.00083" fill="#d4ddf8"/>
  <rect x="248.014" y="552.073" width="6.00167" height="6.00467" rx="3.00083" fill="#d4ddf8"/>
  <rect x="279.016" y="552.073" width="6.00167" height="6.00467" rx="3.00083" fill="#d4ddf8"/>
  <rect x="155.008" y="576.088" width="6.00167" height="6.00467" rx="3.00083" fill="#d4ddf8"/>
  <rect x="186.01" y="576.088" width="6.00167" height="6.00467" rx="3.00083" fill="#d4ddf8"/>
  <rect x="217.012" y="576.088" width="6.00167" height="6.00467" rx="3.00083" fill="#d4ddf8"/>
  <rect x="248.014" y="576.088" width="6.00167" height="6.00467" rx="3.00083" fill="#d4ddf8"/>
  <rect x="279.016" y="576.088" width="6.00167" height="6.00467" rx="3.00083" fill="#d4ddf8"/>
  <rect x="155.008" y="600.103" width="6.00167" height="6.00467" rx="3.00083" fill="#e5eafb"/>
  <rect x="186.01" y="600.103" width="6.00167" height="6.00467" rx="3.00083" fill="#e5eafb"/>
  <rect x="217.012" y="600.103" width="6.00167" height="6.00467" rx="3.00083" fill="#e5eafb"/>
  <rect x="248.014" y="600.103" width="6.00167" height="6.00467" rx="3.00083" fill="#e5eafb"/>
  <rect x="279.016" y="600.103" width="6.00167" height="6.00467" rx="3.00083" fill="#e5eafb"/>
  <rect x="155.008" y="624.117" width="6.00167" height="6.00467" rx="3.00083" fill="#e5eafb"/>
  <rect x="186.01" y="624.117" width="6.00167" height="6.00467" rx="3.00083" fill="#e5eafb"/>
  <rect x="217.012" y="624.117" width="6.00167" height="6.00467" rx="3.00083" fill="#e5eafb"/>
  <rect x="248.014" y="624.117" width="6.00167" height="6.00467" rx="3.00083" fill="#e5eafb"/>
  <rect x="279.016" y="624.117" width="6.00167" height="6.00467" rx="3.00083" fill="#e5eafb"/>
      </svg>
    </div>
  )
}