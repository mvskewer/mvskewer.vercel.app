import Link from 'next/link'
import Bio from '@/components/Bio'
import Page from '@/components/Page'

export default function Home() {
  return (
    <Page
      description="staff info page idk ***fill this out later***"
      title="Staff"
      h1="Staff Page"
      h2="about our staff"
    >
      <div>
        <Bio name="Yongle" img="yongle">
          <p>Used to be the Emperor of the Ming Dynasty and is now the head of The Skewer.</p>
        </Bio>
        <Bio name="Torbjörn Roger Halsten Herman Adolfsson" img="torbjörn-roger-halsten-herman-adolfsson">
          <p>Co-Founder of the Skewer and Executive Editor. Spends more time working on the webstite than actually working on his articles.</p>
        </Bio>
        <Bio name="Amio Koivunen" img="amio-koivunen">
          <p>Juanma&apos;s #1 fan</p>
        </Bio>
        <Bio name="C. Near" img="c-near">
          <p>A former viewer writer, now a senior and not ready for life.</p>
        </Bio>
        <Bio name="Dr. Silly" img="dr-silly">
          <p>&quot;I am the fight reporter. I report on fights and sometimes rate them on the violence and the amount of people involved.&quot;</p>
        </Bio>
        <Bio name="Fullpetal Alchemist" img="fullpetal-alchemist">
          <p>&quot;Who am I, you ask?</p>
          <p>A poet, a journalist,</p>
          <p>and sometimes funny.&quot;</p>
          <br />
          <p>It&apos;s our honor to have Fullpetal Alchemist, an esteemed poet and journalist, on our staff. They&apos;re known best for poetry published on their extremely popular Wattpad profile, <Link href="https://www.wattpad.com/user/BlessedBlossomBoi" target="_blank">BlessedBlossomBoi</Link>, and for their deep, insightful analysis of high school issues. They also take a passing interest in chess, school-scale news, and arguing about frivolous things in the debate section.</p>
          <br />
          <p>You may challenge them to a game of chess here: <Link href="https://lichess.org/@/Stupidity" target="_blank">lichess.org/@/Stupdity</Link></p>
        </Bio>
        <Bio name="J. Balvin" img="j-balvin">
          17, student, saxophone player, magic the gathering officianado, one piece addict.
        </Bio>
      </div>
    </Page>
  );
}