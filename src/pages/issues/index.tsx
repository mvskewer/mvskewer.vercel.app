import Page from '@/components/Page'
import Link from 'next/link'

export default function Home() {
  return (
    <Page
      description="information on our issues"
      title="Issues"
      h1="Issues"
      h2="All of our issues in one place!"
    >
      <p>Read our latest issue:</p>
      {/* <LatestIssue /> */} <p>n/a</p>
      <br />
      <p>also here&apos;s an <Link href="/issues/archive">archive</Link> of all our previous releases</p>
    </Page>
  )
}