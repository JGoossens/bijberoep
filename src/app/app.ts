import { Component, signal } from "@angular/core";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Services } from "./components/services/services";
import { WhyChoose } from "./components/why-choose/why-choose";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";


@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    Services,
    WhyChoose,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GJ Software');
}
