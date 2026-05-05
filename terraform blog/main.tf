resource "aws_instance" "web" {
  ami           = "ami-0f58b397bc5c1f2e8"
  instance_type = "t2.micro"

  tags = {
    Name = "Terraform-Server"
  }
}