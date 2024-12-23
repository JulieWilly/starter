
const items = [
  { id: 1, category: "All" },
  { id: 2, category: "Technology" },
  { id: 3, category: "Lifestyle" },
  { id: 4, category: "Health & Wellness" },
  { id: 5, category: "Business & Entrepreneurship" },
  { id: 6, category: "Travel" },
  { id: 7, category: "Education & Learning" },
];
const Topics = () => {
  return (
    <div className='flex flex-row gap-2 flex-wrap'>
      {items.map((topics) => (
        <h1 key={topics.id} className="  w-max p-2 rounded-xl bg-[#1B4942] text-white ">
          {topics.category}
        </h1>
      ))}
    </div>
  );
}

export default Topics