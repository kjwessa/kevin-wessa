
// const [isVisible, setIsVisible] = useState(false);
// const timeoutRef = useRef(null);
// useEffect(() => {
//   const delay = Math.random() * 2000;
//   setTimeout(() => setIsVisible(true), delay);
//   const flipInterval = setInterval(() => {
//     setIsFlipped((prev) => !prev);
//   }, Math.random() * 20000 + 15000);
//   return () => {
//     clearInterval(flipInterval);
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//   };
// }, []);
// const colorClass = pair.color === 'accent' ? 'text-red-500' : 'text-prussian-medium';
// const AnimatedText = ({ text, isVisible, isFlipped, isSecondary = false, isSubtitle = false }) => (
//   <div
//     className={`w-full text-center transition-all duration-1000 lowercase ${
//       isVisible
//         ? isFlipped
//           ? 'translate-y-full opacity-20'
//           : 'translate-y-0 opacity-100'
//         : isSecondary
//         ? '-translate-y-full opacity-0'
//         : 'translate-y-full opacity-0'
//     } ${isSubtitle ? 'text-[1.5vw]' : 'text-[3.5vw]'} tracking-tighter`}
//     style={{ letterSpacing: '-3px' }}
//     aria-hidden={!isVisible || isFlipped}
//   >
//     {text.toLowerCase().split('').map((char, charIndex) => (
//       <span
//         key={charIndex}
//         className="inline-block transition-transform duration-500"
//         style={{
//           transitionDelay: `${charIndex * 30}ms`,
//           transform: isVisible && !isFlipped ? 'translateY(0)' : 'translateY(100%)',
//         }}
//       >
//         {char === ' ' ? '\u00A0' : char}
//       </span>
//     ))}
//   </div>
// );
// return (
//   <div className={`flex flex-col items-center ${colorClass} px-6 py-3`}>
//     <div className="relative overflow-hidden" style={{ height: 'calc(3.5vw + 1.5vw + 1em)' }}>
//       <AnimatedText text={pair.primary} isVisible={isVisible} isFlipped={isFlipped} />
//       <AnimatedText text={pair.secondary} isVisible={isVisible} isFlipped={!isFlipped} isSecondary={true} />
//       {pair.underline && (
//         <div className="mt-2">
//           <AnimatedText 
//             text={pair.underline.primary} 
//             isVisible={isVisible} 
//             isFlipped={isFlipped} 
//             isSubtitle={true}
//           />
//           <AnimatedText 
//             text={pair.underline.secondary} 
//             isVisible={isVisible} 
//             isFlipped={!isFlipped} 
//             isSecondary={true} 
//             isSubtitle={true}
//           />
//         </div>
//       )}
//     </div>
//   </div>
// );
// };
// export function AnimatedHero() {
// // Create rows with approximately 3 words each
// const rows = wordPairs.reduce((acc, curr, index) => {
//   const rowIndex = Math.floor(index / 3);
//   if (!acc[rowIndex]) {
//     acc[rowIndex] = [];
//   }
//   acc[rowIndex].push(curr);
//   return acc;
// }, []);
// return (
//   <div className="min-h-screen bg-champagne-light flex flex-col justify-center px-4 pt-[50vh]">
//     <div className="w-full">
//       {rows.map((row, rowIndex) => (
//         <div key={rowIndex} className="flex justify-between font-light mb-8">
//           {row.map((pair, index) => (
//             <AnimatedWord key={index} pair={pair} />
//           ))}
//         </div>
//       ))}
//     </div>
//   </div>
// );
// }


// "color": "base",
// "underline": "Leader"
// }
// },
// {
// "primary": {
// "text": "Family Man",
// "color": "accent",
// "underline": "Innovator"
// },
// "secondary": {
// "text": "Work-Life Balance",
// "color": "base",
// "underline": "Leader"
// },
// "tertiary": {
// "text": "Economics",
// "color": "base",
// "underline": "Leader"
// }
// },
// {
// "primary": {
// "text": "Innovator",
// "color": "accent",
// "underline": "Innovator"
// },
// "secondary": {
// "text": "Trendsetter",
// "color": "base",
// "underline": "Leader"
// },
// "tertiary": {
// "text": "Philosophy",
// "color": "base",
// "underline": "Leader"
// }
// },
// {
// "primary": {
// "text": "AI Enthusiast",
// "color": "accent",
// "underline": "Innovator"
// },
// "secondary": {
// "text": "Tech Explorer",
// "color": "base",
// "underline": "Leader"
// },
// "tertiary": {
// "text": "Unbounded Branding",
// "color": "base",
// "underline": "Leader"
// }
// },
// {
// "primary": {
// "text": "Agile",
// "color": "accent",
// "underline": "Innovator"
// },
// "secondary": {
// "text": "Adaptive",
// "color": "base",
// "underline": "Leader"
// },
// "tertiary": {
// "text": "Pixel Perfect",
// "color": "base",
// "underline": "Leader"
// }
// },
// {
// "primary": {
// "text": "Mentor",
// "color": "accent",
// "underline": "Innovator"
// },
// "secondary": {
// "text": "Lifelong Learner",
// "color": "base",
// "underline": "Leader"
// },
// "tertiary": {
// "text": "Creative Director",
// "color": "base",
// "underline": "Leader"
// }
// },
// {
// "primary": {
// "text": "Design Thinker",
// "color": "accent",
// "underline": "Innovator"
// },
// "secondary": {
// "text": "Creative Problem Solver",
// "color": "base",
// "underline": "Leader"
// },
// "tertiary": {
// "text": "Creative Director",
// "color": "base",
// "underline": "Leader"
// }
// },
// {
// "primary": {
// "text": "Ethical Design",
// "color": "accent",
// "underline": "Innovator"
// },
// "secondary": {
// "text": "Inclusive Design",
// "color": "base",
// "underline": "Leader"
// },
// "tertiary": {
// "text": "Creative Director",
// "color": "base",
// "underline": "Leader"
// }
// }
// ]



// <div className="bg-red-500 items-center justify-center flex rounded-xl col-span-1 row-span-1">
// <div className="items-center justify-center pt-[90%] relative flex w-full h-full">
//   <div className="items-center bottom-0 justify-center left-0 absolute top-0 flex p-8">
//     <img className="align-middle inline-block w-24 h-10 max-w-full" src="https://cdn.prod.website-files.com/63f01df7eead46b8df360d90/63f4252f1dc162848f6aa8bf_Pendo%20light.svg" alt="Pendo" />
//   </div>
// </div>
// </div>
// <div className="bg-red-500 items-center justify-center flex rounded-xl col-span-1 row-span-1">
// <div className="items-center justify-center pt-[90%] relative flex w-full h-full">
//   <div className="items-center bottom-0 justify-center left-0 absolute top-0 flex p-8">
//     <img className="align-middle inline-block w-24 h-10 max-w-full" src="https://cdn.prod.website-files.com/63f01df7eead46b8df360d90/63f4253a596f1a867efa7e7d_Netflix%20light.svg" alt="Netflix" />
//   </div>
// </div>
// </div>
// <div className="bg-red-500 items-center justify-center flex rounded-xl col-span-1 row-span-1">
// <div className="items-center justify-center pt-[90%] relative flex w-full h-full">
//   <div className="items-center bottom-0 justify-center left-0 absolute top-0 flex p-8">
//     <img className="align-middle inline-block w-24 h-10 max-w-full" src="https://cdn.prod.website-files.com/63f01df7eead46b8df360d90/63f4254cb3d84fb31b9fe17c_Slack%20light.svg" alt="Slack" />
//   </div>
// </div>
// </div>
// <div className="bg-red-500 items-center justify-center flex rounded-xl col-span-1 row-span-1">
// <div className="items-center justify-center pt-[90%] relative flex w-full h-full">
//   <div className="items-center bottom-0 justify-center left-0 absolute top-0 flex p-8">
//     <img className="align-middle inline-block w-16 h-8 max-w-full" src="https://cdn.prod.website-files.com/63f01df7eead46b8df360d90/63f42558a6a1ca78e12a584f_Stripe%20light.svg" alt="Stripe" />
//   </div>
// </div>
// </div>
// <div className="bg-red-500 items-center justify-center flex rounded-xl col-span-1 row-span-1">
// <div className="items-center justify-center pt-[90%] relative flex w-full h-full">
//   <div className="items-center bottom-0 justify-center left-0 absolute top-0 flex p-8">
//     <img className="align-middle inline-block w-24 h-11 max-w-full" src="https://cdn.prod.website-files.com/63f01df7eead46b8df360d90/63f42565369f9e272ff704a2_Upwork%20light.svg" alt="Upwork" />
//   </div>
// </div>
// </div>
// <div className="bg-red-500 items-center justify-center flex rounded-xl col-span-1 row-span-1">
// <div className="items-center justify-center pt-[90%] relative flex w-full h-full">
//   <div className="items-center bottom-0 justify-center left-0 absolute top-0 flex p-8">
//     <img className="align-middle inline-block w-20 h-8 max-w-full" src="https://cdn.prod.website-files.com/63f01df7eead46b8df360d90/63f42574b054e94158087ddf_Gusto%20light.svg" alt="Gusto" />
//   </div>
// </div>
// </div>
// <div className="bg-red-500 items-center justify-center flex rounded-xl col-span-1 row-span-1">
// <div className="items-center justify-center pt-[90%] relative flex w-full h-full">
//   <div className="items-center bottom-0 justify-center left-0 absolute top-0 flex p-8">
//     <img className="align-middle inline-block w-28 h-5 max-w-full" src="https://cdn.prod.website-files.com/63f01df7eead46b8df360d90/63f4257d2a45bb23c2b234ad_Attentive%20light.svg" alt="Attentive" />
//   </div>
// </div>
// </div>
// <div className="bg-red-500 items-center justify-center flex rounded-xl col-span-1 row-span-1">
// <div className="items-center justify-center pt-[90%] relative flex w-full h-full">
//   <div className="items-center bottom-0 justify-center left-0 absolute top-0 flex p-8">
//     <img className="align-middle inline-block w-24 h-11 max-w-full" src="https://cdn.prod.website-files.com/63f01df7eead46b8df360d90/63f42588b054e982aa0881f0_Dribbble%20light.svg" alt="Dribbble" />
//   </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// </section>
// </>   
// );
// }