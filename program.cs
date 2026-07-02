
WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
WebApplication app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

string allComments = "Drop a comment below!";

app.MapGet("/api/comment", GetComments);
app.MapPost("/api/comment", UpdateComments);

app.Run();

IResult GetComments()
{
	return Results.Text(allComments);
}

IResult UpdateComments(HttpRequest request) // updates the comment and sends browser back to "about"
{
	string comment = request.Form["comment"].ToString();
	if (!string.IsNullOrEmpty(comment))
	{
		string timestamp = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
		allComments += $"\n[{timestamp}] {comment}";
	}
	return Results.Redirect("/about.html");
}