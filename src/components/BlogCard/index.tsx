import React from 'react'
import './styles.css'

export default function Blog() {
  return (
    <div className="box-border flex h-[680px] w-[1678px] flex-row items-center justify-start gap-8 border-y border-solid border-[#272727ff] py-[58px]">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/07wptdtq1os-135%3A3720?alt=media&token=d1dd0351-9dbc-43b4-b061-134aeb18278d"
        alt="Not Found"
        className="h-[100%] w-[840px]"
      />
      <div className="box-border flex h-[100%] w-[806px] flex-col items-start justify-between gap-4">
        <div className="box-border flex w-[100%] flex-col items-start justify-start gap-4">
          <p className="font-inter border-[#b43435ff] text-xl leading-5 font-[400] tracking-[3.2px] uppercase">
            Category
          </p>
          <p className="font-bebas neue border-[#272727ff] text-[114px] leading-[89%] font-[400] tracking-[-4px] uppercase">
            BRANDING MAKES YOU CHOOSE
          </p>
        </div>
        <div className="box-border flex w-[100%] flex-col items-start justify-start gap-[34px]">
          <p className="font-inter border-[#272727ff] text-[28px] leading-[143%] font-[400]">
            Real branding isn't about logos - it's about the courage to choose what you're not and
            the power of saying no.
          </p>
          <div className="box-border flex w-[undefinedundefined] flex-row items-center justify-start gap-1.5 rounded-[999px]">
            <p className="font-inter border-[#b43435ff] text-xl leading-5 font-[400] tracking-[3.2px] uppercase">
              Keep Reading
            </p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/07wptdtq1os-I135%3A3727%3B135%3A3644?alt=media&token=6d8198eb-470b-4179-ac84-ce79645c7114"
              alt="Not Found"
              className="h-[100%] w-6"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
