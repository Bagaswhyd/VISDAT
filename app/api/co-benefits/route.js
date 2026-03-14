import data from '@/public/data/co_benefits.json'


export async function GET() {
return Response.json(data)
}