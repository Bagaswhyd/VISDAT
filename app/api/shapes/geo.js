import geo from '@/public/data/small_area.geojson'


export async function GET() {
return Response.json(geo)
}