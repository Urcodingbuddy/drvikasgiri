import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+971 58 104 9475",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@drvikasgiri.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dubai Silicon Oasis, UAE",
  },
];

const hours = [
  { day: "Monday – Friday", time: "8:00 am – 8:00 pm" },
  { day: "Saturday", time: "8:00 am – 8:00 pm" },
  { day: "Sunday", time: "10:00 am – 6:00 pm" },
];

export default function ContactDetails() {
  return (
    <div className="space-y-8">
      {contactInfo.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-start gap-5">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Icon className="size-4 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">
              {label}
            </div>
            <div className="text-white whitespace-pre-line">{value}</div>
          </div>
        </div>
      ))}

      <div className="flex items-start gap-5">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Clock className="size-4 text-primary" strokeWidth={1.5} />
        </div>
        <div>
          <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">
            Opening Hours
          </div>
          <div className="space-y-1.5">
            {hours.map(({ day, time }) => (
              <div
                key={day}
                className="flex items-center justify-between gap-6 text-sm"
              >
                <span className="text-gray-400">{day}</span>
                <span className="text-white shrink-0">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
