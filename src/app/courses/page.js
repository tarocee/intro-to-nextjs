async function getCourses(){
    const res = await fetch('http://localhost:3001/courses',{
        cache:'force-cache'
    });
    if(!res.ok) throw new Error("Failed to fetch courses");
    return res.json();
}
export default async function CoursePage(){
   const data =await getCourses()
   console.log(data)
return (
    <>
<h1>course page</h1>
<ul>
{data.map((course) => <li key={course.id}>{course.title}</li>)}
</ul>
    </>
)
}