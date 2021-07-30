const Student = require("./../db/schema/Student");
const Teacher = require("./../db/schema/Teacher");
const { sendEmail } = require("../utills/sendEmail");

exports.studentContact = async (req, res) =>
{
  const { name, email, message } = req.body;

  try
  {
    const student = await Student.findOne({ email: email });
    if (student)
    {
      const id = student._id;

       /* link will be changed when we deploy client-side , if we are running client-side on local host 
      then link below will be sent as email */

      const link = `${ req.protocol }://${ req.hostname }:3000/`;

      const studentcontent = `<h3 style="text-align:center">Thanks for contacting us ! 👏</h3>
      
      <p>Dear ${ student.name }, We have received your message/feedback successfully.</p> 
      <p>We appreciate you contacting us. Keep learning with us and uplifting yourself.  </p>
      <p>Feel free to send us your suggestions anytime. Have any query related to LearnZania 🤔 ? Do contact us. ✋ </p>
      <hr/>
      <h3 style="text-align:center"><a href=${ link }>Visit LearnZania 💡 again !</a></h3>
      <hr/>
      
      Thank You ! Have a great day 😄 !`;

      await sendEmail(
        email,
        "Thanks for getting in touch with LearnZania ",
        studentcontent
      );

      const admincontent = `<h3 style="text-align:center"> Hey Akshima ! You have got a contact message from LearnZania !</h3>
      
      <p>${ name } has contacted you on LearnZania. We have sent him a thank you mail. </p>
      <p>These are the ${ name }'s contact details.</p>
      <hr/>
      <h4>Name: ${ name }</h4>
      <hr/>
      <h4>Email: ${ email }</h4>
      <hr/>
      <h4>Role: Student</h4>
      <hr/>
      <h4>Message : ${ message }</h4>
      <hr/>
      `;

      await sendEmail(
        process.env.SENDGRID_VERIFIED_MAIL,
        "Got Contact from LearnZania",
        admincontent
      );

      Student.findByIdAndUpdate(
        id,
        { $push: { messages_sent: message } },
        { new: true },
        function (err, doc)
        {
          if (err)
          {
            res.status(500).json({ error: "Student not found with this id" });
          }
        }
      );

      res.status(200).send({ msg: "You message has been sent, check your mailbox to find response sent by us" });
    } else
    {
      return res.status(401).json({ error: "Student not found registered with this email" });
    }
  } catch (err)
  {
    res.status(500).json({ error: "500 Internal Error" });
  }
};

exports.teacherContact = async (req, res) =>
{
  const { name, email, message } = req.body;

  try
  {
    const teacher = await Ttudent.findOne({ email: email });
    if (teacher)
    {
      const id = teacher._id;

       /* link will be changed when we deploy client-side , if we are running client-side on local host 
      then link below will be sent as email */

      const link = `${ req.protocol }://${ req.hostname }:3000/`;

      const teachercontent = `<h3 style="text-align:center">Thanks for contacting us ! 👏</h3>
      
      <p>Dear ${ name }, We have received your message/feedback successfully.</p> 
      <p>We appreciate you contacting us. Keep teaching students with us and uplifting our students. </p>
      <p>Feel free to send us your suggestions anytime. Have any query related to LearnZania 🤔 ? Do contact us. ✋ </p>
      <hr/>
      <h3 style="text-align:center"><a href=${ link }>Visit LearnZania 💡 again !</a></h3>
      <hr/>
      
      Thank You ! Have a great day 😄 !`;

      await sendEmail(
        email,
        "Thanks for getting in touch with LearnZania ",
        teachercontent
      );

      const admincontent = `<h3 style="text-align:center"> Hey Akshima ! You have got a contact message from LearnZania !</h3>
      
      <p>${ name } has contacted you on LearnZania. We have sent him a thank you mail. </p>
      <p>These are the ${ name }'s contact details.</p>
      <hr/>
      <h4>Name: ${ name }</h4>
      <hr/>
      <h4>Email: ${ email }</h4>
      <hr/>
      <h4>Role: Teacher</h4>
      <hr/>
      <h4>Message : ${ message }</h4>
      <hr/>
      `;

      await sendEmail(
        process.env.SENDGRID_VERIFIED_MAIL,
        "Got Contact from LearnZania",
        admincontent
      );

      Teacher.findByIdAndUpdate(
        id,
        { $push: { messages_sent: message } },
        { new: true },
        function (err, doc)
        {
          if (err)
          {
            res.status(500).json({ error: "Teacher not found with this id" });
          }
        }
      );

      res.status(200).send({ msg: "You message has been sent, check your mailbox to find response sent by us" });
    } else
    {
      return res.status(401).json({ error: "Teacher not found registered with this email" });
    }
  } catch (err)
  {
    res.status(500).json({ error: "500 Internal Error" });
  }
};
