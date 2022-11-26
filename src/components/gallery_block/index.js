/**
 * Copyright 2016 Oleh Zasadnyy, GDG Lviv
 * Source: https://github.com/gdg-x/hoverboard
 */

import { Component } from "preact";
import style from "./style";

export default class GalleryBlock extends Component {
  constructor(props) {
    super(props);
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      this.io = new IntersectionObserver(
        entries => {
          const visibleEntries = entries.filter(e => e.isIntersecting);

          visibleEntries
            .filter(e => e.target instanceof HTMLImageElement)
            .forEach(e => {
              e.target.src = e.target.dataset.src;
            });
        },
        {
          /* Using default options. Details below */
        }
      );
    }
  }

  componentDidMount() {
    if (!this.io) return;

    const elements = document.querySelectorAll(`.${style.grid_item}`);

    elements.forEach(element => this.io.observe(element));
  }

  componentWillUnmount() {
    if (!this.io) return;

    this.io.disconnect();
  }

  render() {
    return (
      <div class={style.photos_grid}>
        <img
          crossorigin="anonymous"
          class={style.grid_item}
          data-src="https://res.cloudinary.com/dzaaefrwa/image/upload/v1669465295/devfest19-1_jn1nt6.jpg"
        />
        <img
          crossorigin="anonymous"
          class={style.grid_item}
          data-src="https://res.cloudinary.com/dzaaefrwa/image/upload/v1669465295/devfest19-2_p7idyp.jpg"
        />
        <img
          crossorigin="anonymous"
          class={style.grid_item}
          data-src="https://res.cloudinary.com/dzaaefrwa/image/upload/v1669465295/devfest19-3_rgdvrc.jpg"
        />
        <img
          crossorigin="anonymous"
          class={style.grid_item}
          data-src="https://res.cloudinary.com/dzaaefrwa/image/upload/v1669465295/devfest19-4_v3psqg.jpg"
        />
        <img
          crossorigin="anonymous"
          class={style.grid_item}
          data-src="https://res.cloudinary.com/dzaaefrwa/image/upload/v1669465295/devfest19-5_ivccl2.jpg"
        />
        <img
          crossorigin="anonymous"
          class={style.grid_item}
          data-src="https://res.cloudinary.com/dzaaefrwa/image/upload/v1669465296/devfest19-6_qlypg3.jpg"
        />
        <img
          crossorigin="anonymous"
          class={style.grid_item}
          data-src="https://res.cloudinary.com/dzaaefrwa/image/upload/v1669465296/devfest19-7_mlnk6o.jpg"
        />
        <img
          crossorigin="anonymous"
          class={style.grid_item}
          data-src="https://res.cloudinary.com/dzaaefrwa/image/upload/v1669465296/devfest19-8_akm0ho.jpg"
        />
        <div crossorigin="anonymous" class={style.gallery_info}>
          <div>
            <h2>DevFest KL 2019 highlights</h2>
            <p>
              DevFest 2019's festival built lots of excitement. Check out photos
              from featured talks, hands-on learning sessions, and after-hours
              fun.
            </p>
          </div>
          {/* <a
            href="https://photos.app.goo.gl/AfuFKVTzSfxkKZk6A"
            target="_blank"
            rel="noopener noreferrer"
          >
            See all photos
          </a> */}
        </div>
      </div>
    );
  }
}