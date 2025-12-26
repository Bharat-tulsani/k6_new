import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  const url = 'https://quickpizza.grafana.com/test.k6.io/';
}