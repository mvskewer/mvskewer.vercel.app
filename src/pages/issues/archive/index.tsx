import File from '@/components/File'
import Page from '@/components/Page'

export default function Home() {
  return (
    <Page
      description="an archive of all of our digital releases"
      title="Archive"
      h1="Archive"
      h2="An archive of all of our digital releases"
    >
        <p>sorted by month:</p>
        <ul>
          <File path="2023/February.pdf" name="February">February</File>
          <File path="2023/March.pdf" name="March">March</File>
          <File path="2023/September.pdf" name="September">September</File>
        </ul>
    </Page>
  )
}
