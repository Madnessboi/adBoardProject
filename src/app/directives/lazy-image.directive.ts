import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

@Directive({
  selector: '[appLazyImage]',
})
export class LazyImageDirective implements OnInit {
  @Input('appLazyImage') imageId!: string;
  @Input() placeholder: string = 'assets/images/placeholder.jpg';

  constructor(private el: ElementRef<HTMLImageElement>, private imageService: ImageService) {}

  ngOnInit(): void {
    this.el.nativeElement.src = this.placeholder;

    if (this.imageId) {
      this.loadImage();
    }
  }

  private loadImage(): void {
    this.imageService.getImageById(this.imageId).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        this.el.nativeElement.src = url;
      },
      error: () => {
        this.el.nativeElement.src = this.placeholder;
      },
    });
  }
}
