import {
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'

type NewsItem = {
  date: string
  author: string
  title: string
  content: string
}

type NewsProps = {
  items?: NewsItem[]
}

export function News({ items }: NewsProps) {
  if (!items || items.length === 0) {
    return <p className='px-6'>No news to display</p>
  }

  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <div key={index} className='mb-6'>
          <CardTitle className='px-6'>{item.title}</CardTitle>
          <CardDescription className='px-6'>{item.date}, {item.author}</CardDescription>
          <CardContent>{item.content}</CardContent>
        </div>
      ))}
    </div>
  )
}
