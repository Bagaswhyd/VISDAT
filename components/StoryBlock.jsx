export default function StoryBlock({ title, text }) {
return (
<div className="max-w-md">
<h2 className="text-3xl font-bold mb-3">{title}</h2>
<p className="text-gray-300 leading-relaxed">{text}</p>
</div>
)
}