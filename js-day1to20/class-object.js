class MyClass
{
    submit()
    {
        alert("form submitted");
    }
    cancel()
    {
        alert("form is cancel");
    }
    fill(name)
    {
        this.name = name;
    }
}

let harryForm = new MyClass();
harry.submit();
harry.cancel();