import { SocialIconsList } from './SocialIconsList'
export function Main() {
  return (
    <section className="flex min-h-32 flex-grow flex-col items-center justify-center text-prussian-medium">
      <h2 className="font-display text-7xl leading-none">Kevin J. Wessa</h2>
      <p className="text-m mt-2 font-body leading-none">Designer / Developer / Photographer</p>
      <SocialIconsList filter={['LinkedIn', 'GitHub', 'Facebook', 'Instagram', 'Email']} />
    </section>
  )
}
