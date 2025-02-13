import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/login/Service/auth.service';
import { HLoaderComponent } from '../../../components/h-loader/h-loader.component';


@Component({
  selector: 'app-login',
  standalone: true,  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,  
    MatInputModule,      
    MatIconModule,
    HLoaderComponent
    
  
           
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    
  ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hidePassword = true;
  labelBtn = "Iniciar sesion";
  private authService = inject(AuthService);
  show: boolean = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
  this.show = true;
}, 5000);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log('Login exitoso:', res);
          window.location.href='/admin';
        },
        error: (err) => {
          console.error('Error en login:', err);
          alert('Error en las credenciales' );
        }
      });
    }
  }
}