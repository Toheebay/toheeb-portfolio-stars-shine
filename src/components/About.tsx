
import { BookOpen, Code, GraduationCap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import Star from './Star';

const About = () => {
  return (
    <section id="about" className="section bg-lightNavy/50 relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Full Stack Developer with expertise in web development, data analysis, and digital marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-lightestSlate">Adebayo Toheeb</h3>
            <p className="mb-4">
              I'm a versatile Full Stack Developer specializing in creating comprehensive software 
              solutions for businesses across various industries. With expertise in both software 
              development and digital marketing, I provide end-to-end services that help businesses 
              thrive in the digital landscape.
            </p>
            <p className="mb-6">
              My approach combines technical excellence with a deep understanding of business needs, 
              ensuring that each solution I develop is not just functional but strategically aligned 
              with your goals and objectives.
            </p>

            <div className="flex items-center mb-4">
              <GraduationCap className="h-5 w-5 text-green mr-3" />
              <div>
                <h4 className="font-medium">Olabisi Onabanjo University</h4>
                <p className="text-sm text-slate">Computer Science Degree</p>
              </div>
            </div>

            <div className="flex items-center">
              <BookOpen className="h-5 w-5 text-green mr-3" />
              <div>
                <h4 className="font-medium">Professional Certifications</h4>
                <p className="text-sm text-slate">WordPress Development, Digital Marketing</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="blinking-star-container">
              <Card className="dashboard-card h-full relative overflow-hidden group p-8">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <Code className="h-16 w-16 text-green mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Skills & Expertise</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="skill-item">
                      <h4 className="font-medium text-lightestSlate mb-2">Full Stack Development</h4>
                      <div className="flex items-center mb-1">
                        <div className="w-full bg-navy rounded-full h-2">
                          <div className="bg-green h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="skill-item">
                      <h4 className="font-medium text-lightestSlate mb-2">Python/Django</h4>
                      <div className="flex items-center mb-1">
                        <div className="w-full bg-navy rounded-full h-2">
                          <div className="bg-green h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="skill-item">
                      <h4 className="font-medium text-lightestSlate mb-2">JavaScript/HTML/CSS</h4>
                      <div className="flex items-center mb-1">
                        <div className="w-full bg-navy rounded-full h-2">
                          <div className="bg-green h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="skill-item">
                      <h4 className="font-medium text-lightestSlate mb-2">Data Analysis</h4>
                      <div className="flex items-center mb-1">
                        <div className="w-full bg-navy rounded-full h-2">
                          <div className="bg-green h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="skill-item">
                      <h4 className="font-medium text-lightestSlate mb-2">WordPress</h4>
                      <div className="flex items-center mb-1">
                        <div className="w-full bg-navy rounded-full h-2">
                          <div className="bg-green h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="skill-item">
                      <h4 className="font-medium text-lightestSlate mb-2">Digital Marketing</h4>
                      <div className="flex items-center mb-1">
                        <div className="w-full bg-navy rounded-full h-2">
                          <div className="bg-green h-2 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                {/* Star decorations */}
                <Star size={3} top="15%" right="10%" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Star size={4} bottom="20%" left="15%" className="opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </Card>
              
              {/* Background stars */}
              <Star size={5} top="-10%" left="20%" />
              <Star size={3} top="30%" right="-5%" />
              <Star size={4} bottom="-5%" left="10%" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background stars */}
      <Star size={4} top="15%" left="8%" />
      <Star size={3} top="20%" right="10%" />
      <Star size={5} bottom="10%" left="15%" />
      <Star size={3} bottom="15%" right="12%" />
    </section>
  );
};

export default About;
